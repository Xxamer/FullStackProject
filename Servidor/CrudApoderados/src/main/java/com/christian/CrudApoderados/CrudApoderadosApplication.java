package com.christian.CrudApoderados;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class CrudApoderadosApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudApoderadosApplication.class, args);
		
	}
	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
	 return new BCryptPasswordEncoder();
	}
}
