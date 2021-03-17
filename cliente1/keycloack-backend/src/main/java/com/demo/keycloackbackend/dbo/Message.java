package com.demo.keycloackbackend.dbo;

//mensaje
public class Message {

    public Message(String message) {
        this.mensaje = message;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    private String mensaje;

}
