const students = [
    { name: 'John Doe', gender: 'Male', percentage: 85.5, college: 'ABC College' },
    { name: 'Jane Smith', gender: 'Female', percentage: 78.2, college: 'XYZ University' },
    { name: 'Alex Johnson', gender: 'Male', percentage: 92.8, college: 'LMN Institute' },
    { name: 'Emily Davis', gender: 'Female', percentage: 88.7, college: 'PQR School of Engineering' },
    { name: 'Michael Brown', gender: 'Male', percentage: 79.6, college: 'UVW College' },
    { name: 'Sophia Lee', gender: 'Female', percentage: 91.3, college: 'DEF University' },
    { name: 'William Taylor', gender: 'Male', percentage: 87.0, college: 'GHI Institute' },
    { name: 'Olivia White', gender: 'Female', percentage: 94.5, college: 'JKL College' },
    { name: 'Ethan Miller', gender: 'Male', percentage: 82.1, college: 'RST University' },
    { name: 'Ava Wilson', gender: 'Female', percentage: 89.8, college: 'MNO School of Science' },
    { name: 'Liam Harris', gender: 'Male', percentage: 76.4, college: 'UVZ Academy' },
    { name: 'Emma Turner', gender: 'Female', percentage: 95.2, college: 'LMN Institute' },
    { name: 'Mason Clark', gender: 'Male', percentage: 83.7, college: 'PQR School of Engineering' },
    { name: 'Oliver Davis', gender: 'Male', percentage: 88.9, college: 'GHI Institute' },
    { name: 'Sophie Hall', gender: 'Female', percentage: 90.6, college: 'JKL College' },
    { name: 'Noah King', gender: 'Male', percentage: 81.5, college: 'ABC College' },
    { name: 'Aria Mitchell', gender: 'Female', percentage: 87.3, college: 'RST University' },
    { name: 'Logan Moore', gender: 'Male', percentage: 78.9, college: 'MNO School of Science' },
    { name: 'Isabella Turner', gender: 'Female', percentage: 93.1, college: 'UVW College' },
    { name: 'Jackson Miller', gender: 'Male', percentage: 86.4, college: 'DEF University' },
  ];
  
  const addHeader=()=>{
    const header = document.createElement("tr");
        for(let i in students[0])
        {
            const head = document.createElement("th");
            let x = i.replace(i[0],i[0].toUpperCase());
            head.textContent=x;
            head.style.color="black";
            head.style.border='0.5px solid white';
            head.style.textAlign='center';
            header.appendChild(head);
        }
        header.style.border='1px solid white';
        document.querySelector("#student-table").appendChild(header);
  }

  const addStudents = (data)=>{
    data.forEach((item)=>{
      const row = document.createElement("tr");
      for(let i in item)
      {
        const td = document.createElement("td");
        td.textContent=item[i];
        td.style.border='1px solid white';
        td.style.textAlign='center';
        row.appendChild(td);
      }
      row.style.border='1px solid white';
      document.querySelector("#student-table").appendChild(row);
    })
  }
  document.querySelector("#submit").addEventListener("click",(e)=>{
        const name1 = document.querySelector("#name").value;
        const gender1 = document.querySelector("input[name=gender]:checked").value;
        const percent = document.querySelector("#percent").value;
        const college1 = document.querySelector("#college").value;
        const obj ={name:name1,gender:gender1,percentage:Number(percent),college:college1};
        students.push(obj);
                console.log(obj);
                console.log(students);

        document.getElementById("data").reset();
  });

  const StudentDetails=(searchText)=>{

    const data = students.filter((item)=>{
        return item.name.toLowerCase().includes(searchText.toLowerCase());
    })
    document.querySelector("#student-table").innerHTML="";
    console.log(data);
    if(data.length!=0)
    {
        addHeader();
        addStudents(data);
    }
    else{
      const para = document.createElement("p");
      para.textContent="No Records Found";
      para.style.color="red";
      document.querySelector("#student-table").appendChild(para);
    }
  };
  document.querySelector("#search").addEventListener("input",(e)=>{
    const search = e.target.value;
    StudentDetails(search);
  })