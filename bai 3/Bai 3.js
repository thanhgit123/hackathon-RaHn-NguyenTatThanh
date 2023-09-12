
for(let i=0;i<=7;i++){
    if(i==1){
        for(let j=1;j<=7;j++){
            if(j==2||j==3||j==5||j==6){
                document.write("*")
                document.write("&nbsp&nbsp&nbsp&nbsp")
            }else{
                document.write("")
                document.write("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp")
            }
        }
    }
    if(i==2){
        for(let j=1;j<=7;j++){
            if(j==1||j==7||j==4){
                document.write("*")
                document.write("&nbsp&nbsp&nbsp&nbsp")
            }else{
                document.write("")
                document.write("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp")
            }
        }
    }
    if(i==3){
        for(let j=1;j<=7;j++){
            if(j==1||j==7){
                document.write("*")
                document.write("&nbsp&nbsp&nbsp&nbsp")
            }else{
                document.write("")
                document.write("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp")
            }
        }
    }
    if(i==4){
        for(let j=1;j<=7;j++){
            if(j==2||j==6){
                document.write("*")
                document.write("&nbsp&nbsp&nbsp&nbsp")
            }else{
                document.write("")
                document.write("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp")
            }
        }
    }
    if(i==5){
        for(let j=1;j<=7;j++){
            if(j==3||j==5){
                document.write("*")
                document.write("&nbsp&nbsp&nbsp&nbsp")
            }else{
                document.write("")
                document.write("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp")
            }
        }
    }
    if(i==6){
        for(let j=1;j<=7;j++){
            if(j==4){
                document.write("*")
                document.write("&nbsp&nbsp&nbsp&nbsp")
            }else{
                document.write("")
                document.write("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp")
            }
        }
    }
    document.write("<br>")
}
