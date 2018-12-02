package com.christian.CrudApoderados.entity.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.web.bind.annotation.CrossOrigin;

@SuppressWarnings("serial")
@CrossOrigin(origins = {"localhost:8100","*"})
@Entity
@Table(name ="firma_cliente")
public class ClientsSigned implements Serializable{
	@Id
	private long Id_Cliente;
	@NotNull
	private long Id_Firma;
	public ClientsSigned() {
	}
	public ClientsSigned(long id_Cliente, long id_Firma) {
		super();
		Id_Cliente = id_Cliente;
		Id_Firma = id_Firma;
	}
	public long getId_Cliente() {
		return Id_Cliente;
	}
	public void setId_Cliente(long id_Cliente) {
		Id_Cliente = id_Cliente;
	}
	public long getId_Firma() {
		return Id_Firma;
	}
	public void setId_Firma(long id_Firma) {
		Id_Firma = id_Firma;
	}
	

}
