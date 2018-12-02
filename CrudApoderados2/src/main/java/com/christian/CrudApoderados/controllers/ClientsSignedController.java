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
import com.christian.CrudApoderados.entity.models.Offices;
import com.christian.CrudApoderados.entity.services.IClientsSignedService;

@CrossOrigin(origins = "*")
@RestController
public class ClientsSignedController {
	@Autowired
	IClientsSignedService ClientsSignedService;
	
	@GetMapping("/ClientsSigned")
	public List<ClientsSigned> getAllSigns(){
		return ClientsSignedService.getAll();
	}
	@GetMapping("/ClientsSigned/GetByClientId/{Id_Cliente}")
	public ClientsSigned getOneByClientId(@PathVariable(value="Id_Cliente") long Id_Cliente) {
		return ClientsSignedService.getByClient(Id_Cliente);
	}
	@GetMapping("/ClientsSigned/GetBySignId/{Id_Firma}")
	public ClientsSigned getOneBySignId(@PathVariable(value="Id_Firma") long Id_Firma) {
		return ClientsSignedService.getBySign(Id_Firma);
	}
	@PostMapping("/ClientsSigned/AddClientSigned")
	public void add(ClientsSigned clientssigned) {
		ClientsSignedService.post(clientssigned);
	}
	
	@PutMapping("/ClientsSigned/UpdateSignedByClientId/{Id_Cliente}")
	public void updateByClientId(ClientsSigned clientssigned,@PathVariable(value="Id_Cliente") long Id_Cliente) {
		ClientsSignedService.putClient(clientssigned, Id_Cliente);
	}
	@PutMapping("/ClientsSigned/UpdateSignedBySignId/{Id_Firma}")
	public void updateBySignId(ClientsSigned clientssigned,@PathVariable(value="Id_Firma") long Id_Firma) {
		ClientsSignedService.putClient(clientssigned, Id_Firma);
	}
	@DeleteMapping("/ClientsSigned/DeleteSignedByClientId/{Id_Cliente}")
	public void updateByClientId(@PathVariable(value="Id_Cliente") long Id_Cliente) {
		ClientsSignedService.deleteByIdClient(Id_Cliente);
	}
	@DeleteMapping("/ClientsSigned/DeleteSignedBySignId/{Id_Firma}")
	public void updateBySignId(@PathVariable(value="Id_Firma") long Id_Firma) {
		ClientsSignedService.deleteByIdClient(Id_Firma);
	}
	

}
