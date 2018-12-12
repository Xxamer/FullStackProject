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

import com.christian.CrudApoderados.entity.models.Offices;
import com.christian.CrudApoderados.entity.services.IOfficesService;

@CrossOrigin(origins = "*")
@RestController
public class OfficesControllers {
	@Autowired
	IOfficesService OfficesService;

	@GetMapping("/offices/allOffices")
	public List<Offices> getAllOffices() {
		return OfficesService.getAll();
	}

	@GetMapping("/offices/findOffice/{id_Oficinas}")
	public Offices getOne(@PathVariable(value="Id_Oficinas") long Id_Oficinas) {
	return OfficesService.get(Id_Oficinas);
}

	@PostMapping("/offices/addOffice")
	public void add(Offices offices) {
		OfficesService.post(offices);
	}
	@PutMapping("/offices/UpdateOffice/{id_Oficinas}")
	public void update(Offices offices,@PathVariable(value="Id_Oficinas") long id_Oficinas) {
		OfficesService.put(offices, id_Oficinas);
	}
	@DeleteMapping("/offices/DeleteOffice/{Id_Oficinas}")
	public void update(@PathVariable(value ="Id_Oficinas") long Id_Oficinas) {
		OfficesService.delete(Id_Oficinas);
	}
}
