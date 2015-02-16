FROM ubuntu:14.04
MAINTAINER Buddy Sandidge <buddy.sandidge@gmail.com>

# UTF-8 locale
RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

RUN echo "deb http://archive.ubuntu.com/ubuntu precise main universe multiverse" \
    > /etc/apt/sources.list.d/multiverse.list
RUN apt-get update && \
    apt-get upgrade -y && \
    yes | apt-get install -y \
        build-essential \
        curl \
        libfontconfig \
        python \
        ruby1.9.1-dev \
        # For PhantomJS 2.0
        g++ flex bison gperf ruby perl libsqlite3-dev libfontconfig1-dev \
        libicu-dev libfreetype6 libssl-dev \
        libpng-dev libjpeg-dev unzip ttf-mscorefonts-installer && \
    rm -r /var/lib/apt/lists

# PhantomJS 2.0
# The linux binary is not yet available for download
# We need to build from source
RUN curl --silent --location --output /opt/phantomjs-2.0.0-source.zip \
    https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.0.0-source.zip && \
    unzip -q /opt/phantomjs-2.0.0-source.zip -d /opt && \
    cd /opt/phantomjs-2.0.0 && ./build.sh  --confirm && \
    mv /opt/phantomjs-2.0.0/bin/phantomjs /usr/local/bin/phantomjs-2.0.0 && \
    rm -r /opt/phantomjs-2.0.0/ && \
    rm /opt/phantomjs-2.0.0-source.zip

# PhantomJS 1.9.8
RUN curl --location --silent --output /opt/phantom-1.9.8.tar.bz2 \
    https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-1.9.8-linux-x86_64.tar.bz2 && \
    mkdir /opt/phantomjs && \
    tar xf /opt/phantom-1.9.8.tar.bz2 --strip-components 1 --directory /opt/phantomjs && \
    mv /opt/phantomjs/bin/phantomjs /usr/local/bin/phantomjs-1.9.8 && \
    rm -rf /opt/phantom-1.9.8.tar.bz2 /opt/phantomjs

# Compass
RUN gem install compass --version 1.0.1

# Node
ENV NODE_VERSION 0.10.35
RUN mkdir -p /opt/node && \
    curl --silent --output /opt/node.tar.gz \
    https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.gz && \
    tar xzf /opt/node.tar.gz --strip-components 1 --directory /opt/node && \
    rm /opt/node.tar.gz

RUN cd /usr/local/bin/ && ln -s phantomjs-1.9.8 phantomjs

ENV PATH /opt/node/bin:/opt/phantom-talk/node_modules/.bin:$PATH
ENV PHANTOMJS_BIN /usr/local/bin/phantomjs

# Mount this in the docker container
VOLUME ["/opt/phantom-talk"]
WORKDIR /opt/phantom-talk
COPY package.json /opt/phantom-talk/package.json
RUN ["npm", "install"]
EXPOSE 8000
EXPOSE 8001
EXPOSE 35729
ENTRYPOINT ["npm"]
