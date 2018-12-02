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

import com.christian.CrudApoderados.entity.models.Banks;
import com.christian.CrudApoderados.entity.services.IBanksService;

@CrossOrigin (origins = "*")
@RestController
public class BanksController {
	@Autowired
	IBanksService BanksService;

	@GetMapping("/Banks/AllBanks")
	public List<Banks> getAllBanks(){
		return BanksService.getAll();
	}
	@GetMapping("/Banks/FindBanks/{Id_banco}")
	public Banks getOne(@PathVariable(value = "Id_banco") long Id_Banco) {
		return BanksService.get(Id_Banco);
	}
	@PostMapping("/Banks/addBank")
	public void add(Banks banks) {
		BanksService.post(banks);
	}
	@PutMapping("/Banks/UpdateBanks/{Id_banco}")
	public void update(Banks banks,@PathVariable(value = "Id_banco") long Id_banco) {
		BanksService.put(banks, Id_banco);
	}
	@DeleteMapping("/Banks/deleteBank/{Id_banco}")
	public void update(@PathVariable(value = "Id_banco") long Id_banco) {
		BanksService.delete(Id_banco);
}
}
