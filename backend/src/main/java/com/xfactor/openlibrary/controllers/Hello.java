package com.xfactor.openlibrary.controllers;

import java.util.HashMap;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xfactor.openlibrary.domain.Book;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("helloController")
public class Hello {
    int x = 0;

    @GetMapping("/hello")
    public String hello(@RequestParam String name, @RequestParam int number) {
        return "Hello " + name + " !! " + number;
    }

    @GetMapping("/hi/{name}/{age}")
    public HashMap<String, String> sayHi(@PathVariable int age, @PathVariable String name) {
        HashMap<String, String> respHashMap = new HashMap<>();
        respHashMap.put("name", name);
        respHashMap.put("age", String.valueOf(age));
        return respHashMap;
    }

    @PostMapping
    public Book saveBook(@RequestBody Book book) {
        // book.setId(1);
        return book;
    }

}
