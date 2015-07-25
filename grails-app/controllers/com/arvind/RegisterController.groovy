package com.arvind

import grails.converters.JSON

class RegisterController {


    static allowedMethods = [POST:'saveUser']

    def saveUser(UserRegisterCommand userRegisterCommand) {
        println "params are"+params
        Map responseInfo = [:]
        println userRegisterCommand.hasErrors()
        if(userRegisterCommand.hasErrors()){
            userRegisterCommand.errors.each{
                println it
            }
            responseInfo.put("message","validation failed")
        }else{
            responseInfo.put("message","validation success")
        }
    render responseInfo as JSON
    }
}

class UserRegisterCommand {

    String username
    String password

    static constraints = {
        username blank:false,nullable:false
        password blank:false,nullable:false
    }
}
