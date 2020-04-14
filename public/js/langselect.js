function getSelectedValue() {
  var selectedValue = document.getElementById("list").value;
  console.log(selectedValue);

  if (selectedValue == "java") {
    var code = `import java.util.*;
   class Main 
{
  public static void main(String args[])
    {
        System.out.println("Hello World");
    }
}
   `;
    $("#playground").val(code);
    $("#textAreaDiv")
      .children()
      .last()
      .remove();
  } else if (selectedValue == "cplus") {
    var code = `
    #include<iostream.h>
    #include<stdio.h>
  int main()
  {
    cout<<"Hello World";
    return 0;
  }
  
   `;
    $("#playground").val(code);
    $("#textAreaDiv")
      .children()
      .last()
      .remove();
  } else if (selectedValue == "c") {
    var code = `#include<stdio.h>
  void main()
  {
   printf("Hello World");
  }
  
   `;
    $("#playground").val(code);
    $("#textAreaDiv")
      .children()
      .last()
      .remove();
  } else if (selectedValue == "javascript") {
    var code = `<html>
    <body>
      <script>
        alert("Hello World")
      </script>
    </body>
  </html>
  `;
    $("#playground").val(code);
    $("#textAreaDiv")
      .children()
      .last()
      .remove();
  } else if (selectedValue == "python") {
    var code = `print("Hello World")`;
    $("#playground").val(code);
    $("#textAreaDiv")
      .children()
      .last()
      .remove();
  } else {
    alert("choose any language first");
    $("#playground").val("")
    $('#textAreaDiv').children().last().remove();
  }
}
