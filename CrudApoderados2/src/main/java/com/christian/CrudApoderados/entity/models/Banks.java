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
@Table(name ="banco")

public class Banks implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long Id_banco;
	@NotEmpty
	private String Nombre;
	@NotEmpty
	private String Sede;
	@NotEmpty
	private String Pais;
	
	public Banks() {
	}

	public Banks(long id_Banco, String nombre, String sede, String pais) {
		super();
		Id_banco = id_Banco;
		Nombre = nombre;
		Sede = sede;
		Pais = pais;
	}

	public long getId_Banco() {
		return Id_banco;
	}

	public void setId_Banco(long id_Banco) {
		Id_banco = id_Banco;
	}

	public String getNombre() {
		return Nombre;
	}

	public void setNombre(String nombre) {
		Nombre = nombre;
	}

	public String getSede() {
		return Sede;
	}

	public void setSede(String sede) {
		Sede = sede;
	}

	public String getPais() {
		return Pais;
	}

	public void setPais(String pais) {
		Pais = pais;
	}

}
