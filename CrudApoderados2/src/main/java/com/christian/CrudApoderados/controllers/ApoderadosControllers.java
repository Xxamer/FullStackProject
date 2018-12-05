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

import com.christian.CrudApoderados.entity.models.Apoderados;
import com.christian.CrudApoderados.entity.services.IApoderadosService;

@CrossOrigin (origins = "*")
@RestController
public class ApoderadosControllers {
@Autowired
IApoderadosService ApoderadosService;
@GetMapping("/apoderados/AllApoderados")
public List<Apoderados> getAllApoderados(){
	return ApoderadosService.getAll();
	
}

@GetMapping("/apoderados/FindApoderados/{Id_apoderados}")
public Apoderados getOne(@PathVariable(value ="Id_apoderados") long Id_Apoderados) {
return ApoderadosService.get(Id_Apoderados);
}
@PostMapping("/apoderados/AddApoderado")
public void add(Apoderados apoderados) {
	ApoderadosService.post(apoderados);
}
@PutMapping("/apoderados/UpdateApoderados/{Id_Apoderados}")
public void update(Apoderados apoderados,@PathVariable(value="Id_Apoderados") long Id_Apoderados) {
	ApoderadosService.put(apoderados, Id_Apoderados);
}
@DeleteMapping("/apoderados/deleteApoderados/{Id_Apoderados}")
public void update(@PathVariable(value = "Id_Apoderados") long Id_Apoderados) {
	ApoderadosService.delete(Id_Apoderados);
}
}
