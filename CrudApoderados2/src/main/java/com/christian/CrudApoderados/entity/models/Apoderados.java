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
<<<<<<< HEAD
import javax.persistence.ManyToOne;
=======
>>>>>>> developed
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = {"localhost:8100","*"})
@Entity
@Table(name ="apoderados", uniqueConstraints = {@UniqueConstraint(columnNames = { "Num_Apoderado", "Num_Apoderado"})})
public class Apoderados implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long Id_Apoderado;
<<<<<<< HEAD
	@ManyToOne
	@JoinColumn(name="Id_Banco")
	private Banks Id_Banco;
=======
	@NotNull
	long Id_Banco;
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "Id_Banco")
	private List<Banks> banks;
>>>>>>> developed
	@NotNull
	private int Num_Apoderado;
	@NotEmpty
	private String Nombre;
	@NotEmpty
	private String Apellido1;
	@NotEmpty
	private String Apellido2;
<<<<<<< HEAD
	@OneToMany(mappedBy="Id_Apoderado")
	private List<Sign> SignListApoderado = new ArrayList<Sign>();
	
	public Apoderados() {
	}
	public Apoderados(long id_Apoderado, Banks id_Banco, @NotNull int num_Apoderado, @NotEmpty String nombre,
			@NotEmpty String apellido1, @NotEmpty String apellido2) {
		Id_Apoderado = id_Apoderado;
		Id_Banco = id_Banco;
		Num_Apoderado = num_Apoderado;
		Nombre = nombre;
		Apellido1 = apellido1;
		Apellido2 = apellido2;
	}
=======
>>>>>>> developed
	public long getId_Apoderado() {
		return Id_Apoderado;
	}
	public void setId_Apoderado(long id_Apoderado) {
		Id_Apoderado = id_Apoderado;
	}
<<<<<<< HEAD
	public Banks getId_Banco() {
		return Id_Banco;
	}
	public void setId_Banco(Banks id_Banco) {
=======
	public long getId_Banco() {
		return Id_Banco;
	}
	public void setId_Banco(long id_Banco) {
>>>>>>> developed
		Id_Banco = id_Banco;
	}
	public List<Banks> getBanks() {
		return banks;
	}
	public void setBanks(List<Banks> banks) {
		this.banks = banks;
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
	public Apoderados(long id_Apoderado, @NotNull long id_Banco, List<Banks> banks, @NotNull int num_Apoderado,
			@NotEmpty String nombre, @NotEmpty String apellido1, @NotEmpty String apellido2) {
		super();
		Id_Apoderado = id_Apoderado;
		Id_Banco = id_Banco;
		this.banks = banks;
		Num_Apoderado = num_Apoderado;
		Nombre = nombre;
		Apellido1 = apellido1;
		Apellido2 = apellido2;
	}
	public Apoderados() {
		super();
	}
	
	
	
	
}
