package com.christian.CrudApoderados.entity.services;

import java.util.List;

import com.christian.CrudApoderados.entity.models.Clients;

public interface IClientsService {
public List<Clients> getAll();
public Clients get(long Id_Cliente);
public void post(Clients clients);
public void put(Clients clientes, long Id_Cliente);
public void delete(long Id_Cliente);
}
