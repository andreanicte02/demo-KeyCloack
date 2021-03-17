package com.demo.keycloackbackend.controller;

import com.demo.keycloackbackend.dbo.Message;
import com.demo.keycloackbackend.model.Foo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@RequestMapping("/foo")
@CrossOrigin
public class FooController {

    List<Foo> listFoos = Stream.of(new Foo(1,"foo 1"),
            new Foo(1,"foo 1")).collect(Collectors.toList());

    @GetMapping("/list")
    public ResponseEntity<List<Foo>> list(){
        return new ResponseEntity(listFoos, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Foo> detail(@PathVariable("id") int id){
        Foo foo = listFoos.stream().filter(f -> f.getId() == id).findFirst().orElse(null);
        return new ResponseEntity(foo, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Foo foo){
        int maxIndex = listFoos.stream().max(Comparator.comparing(m -> m.getId())).get().getId();
        foo.setId(maxIndex + 1);
        listFoos.add(foo);
        return new ResponseEntity(new Message("create"), HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody Foo foo){
        Foo fooUpdate = listFoos.stream().filter(f -> f.getId() == id).findFirst().orElse(null);
        fooUpdate.setName(foo.getName());
        return new ResponseEntity(new Message("update"), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id){
        Foo foo = listFoos.stream().filter(f -> f.getId() == id).findFirst().orElse(null);
        listFoos.remove(foo);
        return new ResponseEntity(new Message("delete"), HttpStatus.OK);
    }

}
