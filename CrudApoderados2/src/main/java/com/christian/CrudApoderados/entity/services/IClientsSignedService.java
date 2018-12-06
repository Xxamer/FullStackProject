package com.christian.CrudApoderados.entity.services;

import java.util.List;

import com.christian.CrudApoderados.entity.models.ClientsSigned;

public interface IClientsSignedService {
public List<ClientsSigned> getAll();
public ClientsSigned getBySign(long Id_Firma);
public ClientsSigned getByClient(long Id_Cliente);
public void post(ClientsSigned clientssigned);
public void putSign(ClientsSigned clientssigned, long Id_Firma);
public void putClient(ClientsSigned clientssigned, long Id_Cliente);
public void deleteByIdSign (long Id_Firma);
public void deleteByIdClient (long Id_Cliente);
}
