package com.christian.CrudApoderados.entity.services;

import java.util.List;

import com.christian.CrudApoderados.entity.models.Offices;

public interface IOfficesService {
public List<Offices> getAll();
public Offices get(long Id_Oficinas);
public void post(Offices office);
public void put(Offices offices, long Id_Oficinas);
public void delete(long Id_Oficinas);
}
