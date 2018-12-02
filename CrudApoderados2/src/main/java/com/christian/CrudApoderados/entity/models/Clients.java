package com.christian.CrudApoderados.entity.models;
import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = {"localhost:8100","*"})
@Entity
@Table(name ="cliente")
public class Clients implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long Id_Cliente;
	@NotEmpty
	private String Nombre;
	@NotEmpty
	private String Apellido1;
	@NotEmpty
	private String Apellido2;
	@NotEmpty
	private String NIF;
	
	public Clients(long id_Cliente, @NotEmpty String nombre, @NotEmpty String apellido1, @NotEmpty String apellido2,
			@NotEmpty String nif) {
		super();
		Id_Cliente = id_Cliente;
		Nombre = nombre;
		Apellido1 = apellido1;
		Apellido2 = apellido2;
		NIF = nif;
	}
	public Clients() {
	}
	public long getId_Cliente() {
		return Id_Cliente;
	}
	public void setId_Cliente(long id_Cliente) {
		Id_Cliente = id_Cliente;
	}
	public String getNombre() {
		return Nombre;
	}
	public void setNombre(String nombre) {
		Nombre = nombre;
	}
	public String getApellido1() {
		return Apellido1;
	}
	public void setApellido1(String apellido1) {
		Apellido1 = apellido1;
	}
	public String getApellido2() {
		return Apellido2;
	}
	public void setApellido2(String apellido2) {
		Apellido2 = apellido2;
	}
	public String getNIF() {
		return NIF;
	}
	public void setNIF(String nif) {
		NIF = nif;
	}
	
}
