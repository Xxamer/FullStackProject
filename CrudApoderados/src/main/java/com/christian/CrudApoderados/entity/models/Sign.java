package com.christian.CrudApoderados.entity.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.springframework.web.bind.annotation.CrossOrigin;
@Entity
@CrossOrigin(origins = {"localhost:8100","*"})

@Table(name ="firma")
public class Sign implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long Id_Firma;
	@ManyToOne
	@JoinColumn(name="Id_Oficinas")
	private Offices Id_Oficinas;
	@ManyToOne
	@JoinColumn(name="Id_Apoderado")
	private Apoderados Id_Apoderado;
	@NotNull
	private int Num_Escritura;
	@NotEmpty
	private String Fecha;
	@NotNull
	private double Precio_Vivienda;
	@NotNull
	private int Num_Caras;
	@NotEmpty
	private String Garaje;
	@NotEmpty
	private String Trastero;
	@NotNull
	private int Num_Persona;
	
	public Sign() {
	}

	public Sign(long id_Firma, Offices id_Oficinas, Apoderados id_Apoderado, @NotNull int num_Escritura,
			@NotEmpty String fecha, @NotNull double precio_Vivienda, @NotNull int num_Caras, @NotEmpty String garaje,
			@NotEmpty String trastero, @NotNull int num_Persona) {
		Id_Firma = id_Firma;
		Id_Oficinas = id_Oficinas;
		Id_Apoderado = id_Apoderado;
		Num_Escritura = num_Escritura;
		Fecha = fecha;
		Precio_Vivienda = precio_Vivienda;
		Num_Caras = num_Caras;
		Garaje = garaje;
		Trastero = trastero;
		Num_Persona = num_Persona;
	}

	public long getId_Firma() {
		return Id_Firma;
	}

	public void setId_Firma(long id_Firma) {
		Id_Firma = id_Firma;
	}

	public Offices getId_Oficinas() {
		return Id_Oficinas;
	}

	public void setId_Oficinas(Offices id_Oficinas) {
		Id_Oficinas = id_Oficinas;
	}

	public Apoderados getId_Apoderado() {
		return Id_Apoderado;
	}

	public void setId_Apoderado(Apoderados id_Apoderado) {
		Id_Apoderado = id_Apoderado;
	}

	public int getNum_Escritura() {
		return Num_Escritura;
	}

	public void setNum_Escritura(int num_Escritura) {
		Num_Escritura = num_Escritura;
	}

	public String getFecha() {
		return Fecha;
	}

	public void setFecha(String fecha) {
		Fecha = fecha;
	}

	public double getPrecio_Vivienda() {
		return Precio_Vivienda;
	}

	public void setPrecio_Vivienda(double precio_Vivienda) {
		Precio_Vivienda = precio_Vivienda;
	}

	public int getNum_Caras() {
		return Num_Caras;
	}

	public void setNum_Caras(int num_Caras) {
		Num_Caras = num_Caras;
	}

	public String getGaraje() {
		return Garaje;
	}

	public void setGaraje(String garaje) {
		Garaje = garaje;
	}

	public String getTrastero() {
		return Trastero;
	}

	public void setTrastero(String trastero) {
		Trastero = trastero;
	}

	public int getNum_Persona() {
		return Num_Persona;
	}

	public void setNum_Persona(int num_Persona) {
		Num_Persona = num_Persona;
	}

	
	
}
