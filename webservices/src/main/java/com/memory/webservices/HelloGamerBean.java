package com.memory.webservices;

public class HelloGamerBean {

    private String message;

    public HelloGamerBean(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "HelloGamerBean{" +
                "message='" + message + '\'' +
                '}';
    }
}
