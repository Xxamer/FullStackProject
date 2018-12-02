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
@Table(name ="apoderados")
public class Apoderados implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long Id_Apoderado;
	@NotNull
	private int Id_Banco;
	@NotNull
	private int Num_Apoderado;
	@NotEmpty
	private String Nombre;
	@NotEmpty
	private String Apellido1;
	@NotEmpty
	private String Apellido2;
	public Apoderados(long id_Apoderado, @NotNull int id_Banco, @NotNull int num_Apoderado, @NotEmpty String nombre,
			@NotEmpty String apellido1, @NotEmpty String apellido2) {
		Id_Apoderado = id_Apoderado;
		Id_Banco = id_Banco;
		Num_Apoderado = num_Apoderado;
		Nombre = nombre;
		Apellido1 = apellido1;
		Apellido2 = apellido2;
	}
	public Apoderados() {
		super();
	}
	public long getId_Apoderado() {
		return Id_Apoderado;
	}
	public void setId_Apoderado(long id_Apoderado) {
		Id_Apoderado = id_Apoderado;
	}
	public int getId_Banco() {
		return Id_Banco;
	}
	public void setId_Banco(int id_Banco) {
		Id_Banco = id_Banco;
	}
	public int getNum_Apoderado() {
		return Num_Apoderado;
	}
	public void setNum_Apoderado(int num_Apoderado) {
		Num_Apoderado = num_Apoderado;
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
	
	
	
}
