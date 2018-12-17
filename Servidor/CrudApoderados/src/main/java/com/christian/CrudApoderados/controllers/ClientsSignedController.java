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

import com.christian.CrudApoderados.entity.models.ClientsSigned;
import com.christian.CrudApoderados.entity.services.IClientsSignedService;

@CrossOrigin(origins = "*")
@RestController
public class ClientsSignedController {
	@Autowired
	IClientsSignedService ClientsSignedService;
	
	@GetMapping("/clientsigned")
	public List<ClientsSigned> getAllSigns(){
		return ClientsSignedService.getAll();
	}
	@GetMapping("/clientsigned/GetByClientSigned/{Id_firma_cliente}")
	public ClientsSigned getOne(@PathVariable(value="Id_firma_cliente") long Id_firma_cliente) {
		return ClientsSignedService.getByClientSign(Id_firma_cliente);
	}
	@PostMapping("/clientsigned/AddClientSigned")
	public void add(ClientsSigned clientssigned) {
		ClientsSignedService.post(clientssigned);
	}
	@DeleteMapping("/clientsigned/DeleteSignedByClientId/{Id_firma_cliente}")
	public void updateByClientId(@PathVariable(value="Id_firma_cliente") long Id_firma_cliente) {
		ClientsSignedService.delete(Id_firma_cliente);
	}
	

}
