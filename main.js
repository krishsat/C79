name_of_student_array=[];

function submit(){
    var name_1=document.getElementById("name_of_student1").value;
    var name_2=document.getElementById("name_of_student2").value;
    var name_3=document.getElementById("name_of_student3").value;
    var name_4=document.getElementById("name_of_student4").value;

    name_of_student_array.push(name_1);
    name_of_student_array.push(name_2);
    name_of_student_array.push(name_3);
    name_of_student_array.push(name_4);

    console.log(name_of_student_array);

    document.getElementById("display_name").innerHTML=name_of_student_array;
    document.getElementById("button_submit").style.display="none";
    document.getElementById("button_sort").style.display="inline-block";
}

function sorting(){
    name_of_student_array.sort();
    console.log(name_of_student_array);
    document.getElementById("display_name").innerHTML=name_of_student_array;
}