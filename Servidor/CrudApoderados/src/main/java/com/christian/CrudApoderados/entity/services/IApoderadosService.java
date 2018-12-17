package com.christian.CrudApoderados.entity.services;

import java.util.List;

import com.christian.CrudApoderados.entity.models.Apoderados;

public interface IApoderadosService {
public List<Apoderados> getAll();
public Apoderados get (long id_Apoderados);
public void post(Apoderados apoderados);
public void put(Apoderados apoderados, long id_Apoderados);
public void delete(long id_Apoderados);
}
