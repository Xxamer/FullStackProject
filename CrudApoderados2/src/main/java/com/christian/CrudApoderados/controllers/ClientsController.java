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

import com.christian.CrudApoderados.entity.models.Clients;
import com.christian.CrudApoderados.entity.services.IClientsService;

@CrossOrigin(origins = "*")
@RestController
public class ClientsController {
	@Autowired
	IClientsService ClientsService;

	@GetMapping("/clients/AllClients")
	public List<Clients> getAllClients() {
		return ClientsService.getAll();
	}

	@GetMapping("/clients/FindClients/{id_Cliente}")
	public Clients getOne(@PathVariable(value = "id_Cliente") long Id_Cliente) {
		return ClientsService.get(Id_Cliente);
	}
	@PostMapping("/clients/addClient")
	public void add(Clients clients) {
		ClientsService.post(clients);
	}
	@PutMapping("/clients/UpdateClients/{id_Cliente}")
	public void update(Clients clients,@PathVariable(value="id_Cliente") long Id_Cliente) {
		ClientsService.put(clients, Id_Cliente);
	}
	@DeleteMapping("/clients/DeleteClient/{Id_Cliente}")
	public void update(@PathVariable(value = "Id_Cliente") long Id_Cliente) {
	ClientsService.delete(Id_Cliente);
}
}