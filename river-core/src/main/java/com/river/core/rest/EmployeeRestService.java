package com.river.core.rest;

import com.river.core.hr.data.EmployeeRepository;
import com.river.core.hr.entity.person.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.Optional;

import static javax.ws.rs.core.Response.Status.CREATED;
import static javax.ws.rs.core.Response.Status.OK;


@RestController
@RequestMapping("/employee")
public class EmployeeRestService {

    @Autowired
    EmployeeRepository employeeRepository;

    @GetMapping
    @Produces({MediaType.APPLICATION_JSON})
    public Response getEmployee() {
        return Response.status(OK)
                .entity(employeeRepository.findAll())
                .build();
    }

    @PostMapping
    @Produces({MediaType.APPLICATION_JSON})
    public Response postEmployee(@RequestBody Employee employee) {
        employee = employeeRepository.save(employee);
        return Response.status(CREATED)
                .entity(employee)
                .build();
    }

    @GetMapping("/{id}")
    @Produces({MediaType.APPLICATION_JSON})
    public Response postEmployee(@PathVariable("id") Long id) {
        Optional<Employee> employee =employeeRepository.findById(id);
        return Response.status(OK)
                .entity(employee.get())
                .build();
    }

}
