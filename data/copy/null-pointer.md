# This will just crash

```bash
$ gcc -xc - <<APP
#include <stdio.h>
int main() {
    int *p = NULL;
    printf("Before pointer dereference\n");
    *p = 1;
    printf("After pointer dereference\n");
    return 0;
}
APP
$ ./a.out
Before pointer dereference
Segmentation fault (core dumped)
```
