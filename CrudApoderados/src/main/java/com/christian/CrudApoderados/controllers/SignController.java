package com.christian.CrudApoderados.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import com.christian.CrudApoderados.entity.models.Sign;
import com.christian.CrudApoderados.entity.services.ISignService;

@CrossOrigin(origins = "*")
@RestController
public class SignController {
	@Autowired
	ISignService SignService;

	@GetMapping("/Signs/AllSigns")
	public List<Sign> getAllSign() {
		return SignService.getAll();
	}

	@GetMapping("/Signs/getSigns/{Id_Firma}")
	public Sign getOne(@PathVariable(value = "Id_Firma") long Id_Firma) {
		return SignService.get(Id_Firma);
	}

	@PostMapping("Signs/addSign")
	public void add(Sign sign) {
		SignService.post(sign);
	}

	@PutMapping("/UpdateSign/{Id_Firma}")
	public void update(Sign sign, @PathVariable(value = "Id_Firma") long Id_Firma) {
		SignService.put(sign, Id_Firma);
	}

	@DeleteMapping("/DeleteSign/{Id_Firma}")
	public void update(@PathVariable(value = "Id_Firma") long Id_Firma) {
		SignService.delete(Id_Firma);
	}
}
