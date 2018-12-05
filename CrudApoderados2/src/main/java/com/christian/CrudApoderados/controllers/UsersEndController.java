package com.christian.CrudApoderados.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.christian.CrudApoderados.entity.models.AppUser;
import com.christian.CrudApoderados.entity.services.IUserService;


@CrossOrigin (origins = "*")
@RestController
public class UsersEndController {
	@Autowired
	IUserService IUserService;
	
	@GetMapping("/allusers") // This will return all movies in the database
	public List<AppUser> getAll() {
		return IUserService.getAll();
	}
	@PostMapping("/adduser")
	public void add(AppUser AppUser) {
		IUserService.post(AppUser);
	}
}
