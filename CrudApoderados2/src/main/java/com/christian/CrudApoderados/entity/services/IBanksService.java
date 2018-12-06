package com.christian.CrudApoderados.entity.services;

import java.util.List;

import com.christian.CrudApoderados.entity.models.Banks;

public interface IBanksService {
public List<Banks> getAll();
public Banks get(long id_Banco);
public void post(Banks banks);
public void put(Banks banks, long id_Banco);
public void delete(long id_Banco);
}
