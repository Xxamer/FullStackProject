package com.christian.CrudApoderados.entity.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.springframework.web.bind.annotation.CrossOrigin;
@CrossOrigin(origins = {"localhost:8100","*"})
@Entity
@Table(name ="oficinas")
public class Offices implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long Id_Oficinas;
	@NotNull
	private int Id_Banco;
	@NotEmpty
	private String Nombre;
	@NotEmpty
	private String Direccion;
	@NotEmpty
	private String Horario;
	public Offices(long id_Oficinas, @NotNull int id_Banco, @NotEmpty String nombre, @NotEmpty String direccion,
			@NotEmpty String horario) {
		super();
		Id_Oficinas = id_Oficinas;
		Id_Banco = id_Banco;
		Nombre = nombre;
		Direccion = direccion;
		Horario = horario;
	}
	public Offices() {
		super();
	}
	public long getId_Oficinas() {
		return Id_Oficinas;
	}
	public void setId_Oficinas(long id_Oficinas) {
		Id_Oficinas = id_Oficinas;
	}
	public int getId_Banco() {
		return Id_Banco;
	}
	public void setId_Banco(int id_Banco) {
		Id_Banco = id_Banco;
	}
	public String getNombre() {
		return Nombre;
	}
	public void setNombre(String nombre) {
		Nombre = nombre;
	}
	public String getDireccion() {
		return Direccion;
	}
	public void setDireccion(String direccion) {
		Direccion = direccion;
	}
	public String getHorario() {
		return Horario;
	}
	public void setHorario(String horario) {
		Horario = horario;
	}
	

}
