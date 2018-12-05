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

@CrossOrigin(origins = { "localhost:8100", "*" })
@Entity
@Table(name = "oficinas")
public class Offices implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long Id_Oficinas;
	@ManyToOne
	@JoinColumn(name="Id_Banco")
	private Banks Id_Banco;
	@NotNull
<<<<<<< HEAD
	private String Nombre;
	
	@OneToMany(mappedBy="Id_Oficinas")
	private List<Sign> SignListOffice = new ArrayList<Sign>();
=======
	long Id_Banco;
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "Id_Banco")
	private List<Banks> banks;
	@NotNull
	private String Nombre;
>>>>>>> developed

	@NotEmpty
	private String Direccion;
	@NotEmpty
	private String Horario;
<<<<<<< HEAD
	public Offices(long id_Oficinas, Banks id_Banco, @NotNull String nombre, @NotEmpty String direccion,
			@NotEmpty String horario) {
=======
	public Offices() {
		super();
	}
	public Offices(long id_Oficinas, @NotNull long id_Banco, List<Banks> banks, @NotNull String nombre,
			@NotEmpty String direccion, @NotEmpty String horario) {
		super();
>>>>>>> developed
		Id_Oficinas = id_Oficinas;
		Id_Banco = id_Banco;
		this.banks = banks;
		Nombre = nombre;
		Direccion = direccion;
		Horario = horario;
	}
<<<<<<< HEAD
	
	public Offices() {
	}

=======
>>>>>>> developed
	public long getId_Oficinas() {
		return Id_Oficinas;
	}
	public void setId_Oficinas(long id_Oficinas) {
		Id_Oficinas = id_Oficinas;
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
