package com.river.client.web.rest;

import org.springframework.web.bind.annotation.RestController;

import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


@RestController
@Path("/employees")
public class EmployeeRestService {

    @GET
    @Path("/mew")
    @Produces({MediaType.APPLICATION_JSON})
    public Response getUserConfigurations(@HeaderParam("Authorization") String authToken) {
        return Response.status(200).build();
    }

}
