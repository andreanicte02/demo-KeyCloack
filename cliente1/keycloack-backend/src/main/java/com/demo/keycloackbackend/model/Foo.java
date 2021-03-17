package com.demo.keycloackbackend.model;

//sin bd
//modelo x

public class Foo {

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public Foo(int id, String name) {
        this.id = id;
        this.name = name;
    }

    private int id;
    private String name;




}


