package com.christian.CrudApoderados.entity.models;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
	private String Nombre;
	@OneToMany(mappedBy="Id_Oficinas")
	private List<Sign> SignListOffice = new ArrayList<Sign>();

	@NotEmpty
	private String Direccion;
	@NotEmpty
	private String Horario;
	public Offices(long id_Oficinas, Banks id_Banco, @NotNull String nombre, @NotEmpty String direccion,
			@NotEmpty String horario) {
		Id_Oficinas = id_Oficinas;
		Id_Banco = id_Banco;
		Nombre = nombre;
		Direccion = direccion;
		Horario = horario;
	}
	
	public Offices() {
	}

	public long getId_Oficinas() {
		return Id_Oficinas;
	}
	public void setId_Oficinas(long id_Oficinas) {
		Id_Oficinas = id_Oficinas;
	}
	public Banks getId_Banco() {
		return Id_Banco;
	}
	public void setId_Banco(Banks id_Banco) {
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
