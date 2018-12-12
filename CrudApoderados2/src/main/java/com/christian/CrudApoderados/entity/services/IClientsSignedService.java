package com.christian.CrudApoderados.entity.services;

import java.util.List;

import com.christian.CrudApoderados.entity.models.ClientsSigned;

public interface IClientsSignedService {
public List<ClientsSigned> getAll();
public ClientsSigned getByClientSign(long Id_FirmaCliente);
public ClientsSigned getBySign(long Id_Firma);
public ClientsSigned getByClient(long Id_Cliente);
public void post(ClientsSigned clientssigned);
public void put(ClientsSigned clientssigned, long Id_FirmaCliente);
public void delete (long Id_FirmaCliente);
}
