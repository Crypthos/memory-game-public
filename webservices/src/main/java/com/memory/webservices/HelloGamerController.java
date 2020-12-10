package com.memory.webservices;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloGamerController {

    //GET
    //URI - /hello-gamer
    //method - "Hello Gamer"
    @GetMapping(path = "/hello-gamer")
    public String helloGamer(){
        return "Hello Gamer";
    }

    //hello-gamer-bean
    @GetMapping(path = "/hello-gamer-bean")
    public HelloGamerBean helloGameBean(){
        return new HelloGamerBean("Hello Gamer - again!");
    }

    ///hello-gamer/path-variable/team08
    @GetMapping(path = "/hello-gamer/path-variable/{name}")
    public HelloGamerBean helloGameBeanPathVariable(@PathVariable String name){
        return new HelloGamerBean(String.format("Hello Gamer, %s", name));
    }

}


