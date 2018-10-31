describe("As a manager adding New Customer", function(){
    xit("should verify all the required fields and positive testing for all the fields", function(){
        browser.ignoreSynchronization=true;
        browser.get("http://www.demo.guru99.com/V4/index.php");
        browser.manage().window().maximize();
        element(by.xpath("//ul[@class='nav navbar-nav']/li[5]/a")).click();
        element(by.xpath("//label[@id='message23']/../input[@name='uid']")).sendKeys("mngr155735");
        element(by.xpath("//label[@id='message18']/../input[@name='password']")).sendKeys("qAsapEr")
        element(by.xpath("//input[@name='btnLogin' and @value='LOGIN']")).click();
        browser.sleep(2000);
        element(by.xpath("//ul[@class='menusubnav']/li[2]")).click();
        element(by.xpath("//p[text()='Add New Customer']")).getText().then(text=>{
            console.log(text);
        });
      for(let i = 4; i <= 13; i++){
                element(by.xpath("//form[@name='addcust']/../tbody/tr/td/table/tbody/tr["+i+"]/td[1]")).getText().then(text=>{
                    console.log(text);
                    
                });
            }
  
        
        element(by.xpath("//label[@id='message']/../input")).sendKeys("Aidana Yntykabeyav");
       browser.sleep(500);
        element(by.xpath("//form[@name='addcust']/../tbody/tr/td/table/tbody/tr/td[2]/input[2][@type='radio']")).click();
        browser.sleep(500);
        element(by.id("dob")).sendKeys("11/11/1990");
        browser.sleep(500);
        element(by.name("addr")).sendKeys("1234 Main st apt 706");
        browser.sleep(500);
        element(by.name("city")).sendKeys("Denver");
        browser.sleep(500);
        element(by.name("state")).sendKeys("PA");
        browser.sleep(500);
        element(by.name("pinno")).sendKeys("123678");
        browser.sleep(500);
        element(by.name("telephoneno")).sendKeys("4124444444");
        browser.sleep(500);
        element(by.name("emailid")).sendKeys("magieasasabdnbdfmas@gmail.com");
        browser.sleep(500);
        element(by.name("password")).sendKeys("abc123");
        browser.sleep(500);
        element(by.xpath("//input[@type='submit' and @value='Submit']")).click();
        browser.sleep(10000);
        





    });

    xit("should generate an error message 'First character can not have space'", function(){
        browser.ignoreSynchronization=true;
        browser.get("http://www.demo.guru99.com/V4/index.php");
        browser.manage().window().maximize();
        element(by.xpath("//ul[@class='nav navbar-nav']/li[5]/a")).click();
        element(by.xpath("//label[@id='message23']/../input[@name='uid']")).sendKeys("mngr155735");
        element(by.xpath("//label[@id='message18']/../input[@name='password']")).sendKeys("qAsapEr")
        element(by.xpath("//input[@name='btnLogin' and @value='LOGIN']")).click();
        element(by.xpath("//ul[@class='menusubnav']/li[2]")).click();
        browser.sleep(2000);
        element(by.xpath("//label[@id='message']/../input")).sendKeys(" ");
        element(by.xpath("//form[@name='addcust']/../tbody/tr/td/table/tbody/tr[4]/td[2]/label")).getText().then(text=>{
           if(text==="First character can not have space"){
            console.log("Passed");
           }else{
               console.log("Not Passed");
           }
        
        });
        element(by.name("addr")).sendKeys(" ");
        element(by.xpath("//form[@name='addcust']/../tbody/tr/td/table/tbody/tr[7]/td[2]/label")).getText().then(text=>{
            if(text==="First character can not have space"){
                console.log("Passed");
               }else{
                   console.log("Not Passed");
               }
        });

        for(let i = 8; i<=12; i++){
        element(by.xpath("//form[@name='addcust']/../tbody/tr/td/table/tbody/tr["+i+"]/td[2]/input[1]")).sendKeys(" ");
        browser.sleep(500);
        }
        for(let i = 8; i <= 13; i++){
            element(by.xpath("//form[@name='addcust']/../tbody/tr/td/table/tbody/tr["+i+"]/td[2]/label")).getText().then(text=>{
                if(text==="First character can not have space"){
                    console.log("Passed");
                   }else{
                       console.log("Not Passed");
                   }
            });
        }
    });


    xit("should generate an error message 'Field must not be blank'", function(){
        browser.ignoreSynchronization=true;
        browser.get("http://www.demo.guru99.com/V4/index.php");
        browser.manage().window().maximize();
        element(by.xpath("//ul[@class='nav navbar-nav']/li[5]/a")).click();
        element(by.xpath("//label[@id='message23']/../input[@name='uid']")).sendKeys("mngr155735");
        element(by.xpath("//label[@id='message18']/../input[@name='password']")).sendKeys("qAsapEr")
        element(by.xpath("//input[@name='btnLogin' and @value='LOGIN']")).click();
        element(by.xpath("//ul[@class='menusubnav']/li[2]")).click();
        browser.sleep(2000);
for(let i = 4; i <= 6; i=i+2){
    element(by.xpath("//form[@name='addcust']/../tbody/tr/td/table/tbody/tr["+i+"]/td[2]/input[1]")).click();
    element(by.xpath("//form[@name='addcust']/../tbody/tr/td/table/tbody/tr/td[2]/input[2][@type='radio']")).click();
    element(by.xpath("//form[@name='addcust']/../tbody/tr/td/table/tbody/tr["+i+"]/td[2]/label")).getText().then(text=>{
        console.log(text);
    });
}
element(by.name("addr")).click();
element(by.xpath("//form[@name='addcust']/../tbody/tr/td/table/tbody/tr/td[2]/input[2][@type='radio']")).click();
element(by.id("message3")).getText().then(text=>{
    console.log(text);
});
        for(let i = 8; i <= 13; i++){
            element(by.xpath("//form[@name='addcust']/../tbody/tr/td/table/tbody/tr["+i+"]/td[2]/input[1]")).click();
            element(by.xpath("//form[@name='addcust']/../tbody/tr/td/table/tbody/tr/td[2]/input[2][@type='radio']")).click();
            element(by.xpath("//form[@name='addcust']/../tbody/tr/td/table/tbody/tr["+i+"]/td[2]/label")).getText().then(text=>{
                console.log(text);
            });
        }
        
    });


    xit("should generate an error message 'Special characters are not allowed'", function(){
        browser.ignoreSynchronization=true;
        browser.get("http://www.demo.guru99.com/V4/index.php");
        browser.manage().window().maximize();
        element(by.xpath("//ul[@class='nav navbar-nav']/li[5]/a")).click();
        element(by.xpath("//label[@id='message23']/../input[@name='uid']")).sendKeys("mngr155735");
        element(by.xpath("//label[@id='message18']/../input[@name='password']")).sendKeys("qAsapEr")
        element(by.xpath("//input[@name='btnLogin' and @value='LOGIN']")).click();
        element(by.xpath("//ul[@class='menusubnav']/li[2]")).click();
        browser.sleep(2000);

        element(by.name("name")).sendKeys("#$%");
        element(by.id("message")).getText().then(text=>{
            if(text==="Special characters are not allowed"){
                console.log("Passed");
            }else{
                console.log("Not Passed");
            }
        })
        element(by.name("addr")).sendKeys("#$%");
        element(by.id("message3")).getText().then(text=>{
            if(text==="Special characters are not allowed"){
                console.log("Passed");
            }else{
                console.log("Not Passed");
            }
        });
        for(let i = 8; i <= 11; i++){
            element(by.xpath("//form[@name='addcust']/../tbody/tr/td/table/tbody/tr["+i+"]/td[2]/input[1]")).sendKeys("%^&");
            element(by.xpath("//form[@name='addcust']/../tbody/tr/td/table/tbody/tr["+i+"]/td[2]/label")).getText().then(text=>{
                if(text==="Special characters are not allowed"){
                    console.log("Passed");
                }else{
                    console.log("Not Passed");
                }
            });
        }
        
    }); 

    it("should generate an error messages", function(){
        browser.ignoreSynchronization=true;
        browser.get("http://www.demo.guru99.com/V4/index.php");
        browser.manage().window().maximize();
        element(by.xpath("//ul[@class='nav navbar-nav']/li[5]/a")).click();
        element(by.xpath("//label[@id='message23']/../input[@name='uid']")).sendKeys("mngr155735");
        element(by.xpath("//label[@id='message18']/../input[@name='password']")).sendKeys("qAsapEr")
        element(by.xpath("//input[@name='btnLogin' and @value='LOGIN']")).click();
        element(by.xpath("//ul[@class='menusubnav']/li[2]")).click();
        browser.sleep(2000);

        element(by.name("name")).sendKeys("1234Ai");
        $("#message").getText().then(text=>{
            if(text==="Numbers are not allowed"){
                console.log("Passed");
            }else{
                console.log("Not Passed");
            }
        })
        element(by.name("name")).clear().sendKeys("Aidana 567");
        $("#message").getText().then(text=>{
            if(text==="Numbers are not allowed"){
                console.log("Passed");
            }else{
                console.log("Not Passed");
            }
        });
        browser.sleep(2000);

        element(by.name("addr")).sendKeys("dfsfsfsdfsdfsfsdfsdfsfsfsdfsdfsfsfsfsfssffsdfsdsdgsgsg");
        element(by.name("city")).sendKeys("123Denver");
        $("#message4").getText().then(text=>{
            if(text==="Numbers are not allowed"){
                console.log("Passed");
            }else{
                console.log("Not Passed");
            }
        });
        browser.sleep(2000);

        element(by.name("state")).sendKeys("1AL");
        $("#message5").getText().then(text=>{
            if(text==="Numbers are not allowed"){
                console.log("Passed");
            }else{
                console.log("Not Passed");
            }
        });
        element(by.name("state")).clear().sendKeys("V4");
        $("#message5").getText().then(text=>{
            if(text==="Numbers are not allowed"){
                console.log("Passed");
            }else{
                console.log("Not Passed");
            }
        });
        browser.sleep(2000);

        element(by.name("pinno")).sendKeys("567gyt");
        browser.sleep(1000);
        element(by.name("pinno")).clear().sendKeys("alarm5");
        $("#message6").getText().then(text=>{
            if(text==="Characters are not allowed"){
                console.log("Passed");
            }else{
                console.log("Not Passed");
            }
        });
        browser.sleep(3000);
        element(by.name("pinno")).clear().sendKeys("jkhd");
        browser.sleep(1000);
        $("#message6").getText().then(text=>{
            if(text==="Characters are not allowed"){
                console.log("Passed");
            }else{
                console.log("Not Passed");
            }
        });
        element(by.name("pinno")).clear().sendKeys("5645");
       $("#message6").getText().then(text=>{
            if(text==="PIN Code must have 6 Digits"){
                console.log("Passed");
            }else{
                console.log("Not Passed");
            }
        });
        browser.sleep(3000);


    element(by.name("telephoneno")).sendKeys("567ghj");
    $("#message7").getText().then(text=>{
        if(text==="Characters are not allowed"){
            console.log("Passed");
        }else{
            console.log("Not Passed");
        }
    })

    });
})