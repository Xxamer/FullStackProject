package com.christian.CrudApoderados.entity.models;

import java.io.Serializable;
<<<<<<< HEAD
import java.util.ArrayList;
=======
>>>>>>> developed
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotEmpty;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = {"*","*"})
@Entity
@Table(name ="banco", uniqueConstraints = {@UniqueConstraint(columnNames = { "Id_Banco", "Id_Banco"})})

public class Banks implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long Id_Banco;
	@NotEmpty
	private String Nombre;
	@NotEmpty
	private String Sede;
	@NotEmpty
	private String Pais;
	@OneToMany(mappedBy="Id_Banco")
	private List<Offices> officesList = new ArrayList<Offices>();
	@OneToMany(mappedBy="Id_Banco")
	private List<Apoderados> ApoderadosList = new ArrayList<Apoderados>();
	
	
	
	
	
	public Banks() {
	}

	public Banks(long Id_banco, String nombre, String sede, String pais) {
		super();
		Id_Banco = Id_banco;
		Nombre = nombre;
		Sede = sede;
		Pais = pais;
	}

	public long getId_Banco() {
		return Id_Banco;
	}

	public void setId_Banco(long Id_banco) {
		Id_Banco = Id_banco;
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
