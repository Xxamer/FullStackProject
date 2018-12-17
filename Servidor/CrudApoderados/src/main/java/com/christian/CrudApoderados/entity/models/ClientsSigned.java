package com.christian.CrudApoderados.entity.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.web.bind.annotation.CrossOrigin;
@CrossOrigin(origins = {"localhost:8100","*"})
@Entity
@Table(name ="firma_cliente")
public class ClientsSigned implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long Id_firma_cliente;
	@ManyToOne
	@JoinColumn(name="Id_Cliente")
	private Clients Id_Cliente;
	@ManyToOne
	@JoinColumn(name="Id_Firma")
	private Sign Id_Firma;
	
	public ClientsSigned() {
	}

	public ClientsSigned(long id_firma_cliente, Clients id_Cliente, Sign id_Firma) {
		Id_firma_cliente = id_firma_cliente;
		Id_Cliente = id_Cliente;
		Id_Firma = id_Firma;
	}

	public long getId_firma_cliente() {
		return Id_firma_cliente;
	}

	public void setId_firma_cliente(long id_firma_cliente) {
		Id_firma_cliente = id_firma_cliente;
	}

	public Clients getId_Cliente() {
		return Id_Cliente;
	}

	public void setId_Cliente(Clients id_Cliente) {
		Id_Cliente = id_Cliente;
	}

	public Sign getId_Firma() {
		return Id_Firma;
	}

	public void setId_Firma(Sign id_Firma) {
		Id_Firma = id_Firma;
	}
	

}
