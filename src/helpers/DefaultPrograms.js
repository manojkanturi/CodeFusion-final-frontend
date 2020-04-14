let JavaScript = `// *** Welcome to Code Fusion Compiler ***
function myFunction(p1, p2)
{
  return p1 * p2;
}
console.log(myFunction(3,7));`;

let C = `// *** Welcome to Code Fusion Compiler ***
#include <stdio.h>
int main()
{
    int no;
    scanf("%d",&no);
    printf("You Entered %d",no);
    return 0;
}`;

let CPP = `// *** Welcome to Code Fusion Compiler ***
#include <iostream>
using namespace std;

int main() 
{
    int no;
    cin>>no;
    cout<<"You Entered" <<no;
    return 0;
}`;

let Java = `// *** Welcome to Code Fusion Compiler ***
import java.util.*;
class Main
{
	public static void main(String[] args)
	{
		Scanner s =new Scanner(System.in);
		int no = s.nextInt();
		System.out.println("You Entered : "+no);
		s.close();
	}
}`;

let Python = `# *** Welcome to Code Fusion Compiler ***
def absolute_value(num):
    if num >= 0:
        return num
    else:
        return -num

# Output: 2
print(absolute_value(5))`;

export { JavaScript, C, CPP, Java, Python };
