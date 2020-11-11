/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import entities.User;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import javax.annotation.security.RolesAllowed;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.TypedQuery;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.SecurityContext;
import javax.ws.rs.core.UriInfo;
import utils.EMF_Creator;
import utils.HttpUtils;
/**
 *
 * @author marcg
 */
@Path("jokes")
public class JokeResource {

    private static final EntityManagerFactory EMF = EMF_Creator.createEntityManagerFactory();
    private static ExecutorService es = Executors.newCachedThreadPool();
    private static Gson GSON = new Gson();
    @Context
    private UriInfo context;

    @Context
    SecurityContext securityContext;

//    @GET
//    @Produces(MediaType.APPLICATION_JSON)
//    public String getInfoForAll() {
//        return "{\"msg\":\"Hello anonymous\"}";
//    }
    @GET
    @Produces(MediaType.APPLICATION_JSON)
//    @Path("jokes")
//    @RolesAllowed("user")
    public String getJokes() throws IOException {
        List<String> URLS = new ArrayList();
        URLS.add("https://geek-jokes.sameerkumar.website/api");
        URLS.add("https://matchilling-tronald-dump-v1.p.rapidapi.com/random/quote");
        URLS.add("https://sv443.net/jokeapi/v2/joke/Any?format=txt&type=single");
        URLS.add("https://api.chucknorris.io/jokes/random");
        URLS.add("https://icanhazdadjoke.com");
        
        List<String> result = new ArrayList();
        for (String string : URLS) {
            result.add(HttpUtils.fetchData(string));
        }
        for (String string : result) {
            System.out.println(string);
        }
//        JokeDto joke = new JokeDTO()


        return "hej";
    }
}
