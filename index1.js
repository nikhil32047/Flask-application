function Test_Case1()
{
    var username=document.getElementById("A").value
    var p1=document.getElementById("B").value
    var p2=document.getElementById("C").value
    if(username=="" || username==null)
    {
        window.alert("Username is required")
        return false
    }
    else if(p1=="" || p1==null)
    {
        window.alert("Password is required")
        return false
    }
    else if(p2=="" || p2==null)
    {
        window.alert("Confirm_Password is required")
        return false
    }
}