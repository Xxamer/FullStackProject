package com.christian.CrudApoderados.entity.services;

import java.util.List;

import com.christian.CrudApoderados.entity.models.Sign;

public interface ISignService {
public List<Sign> getAll();
public Sign get(long Id_Firma);
public void post(Sign sign);
public void put (Sign sign, long Id_Firma);
public void delete(long id_Firma);
}
