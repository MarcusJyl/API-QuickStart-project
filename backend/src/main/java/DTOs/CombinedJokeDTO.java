/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DTOs;

/**
 *
 * @author Mads
 */
public class CombinedJokeDTO {
    String joke1;
    String joke1Reference;
    String joke2;
    String joke2Reference;
    String joke3;
    String joke3Reference;
    String joke4;
    String joke4Reference;
    String joke5;
    String joke5Reference;

    public CombinedJokeDTO(String joke1, String joke2, String joke3, String joke4, String joke5) {
        this.joke1 = joke1;
        this.joke2 = joke2;
        this.joke3 = joke3;
        this.joke4 = joke4;
        this.joke5 = joke5;
    }

    public String getJoke1() {
        return joke1;
    }

    public String getJoke1Reference() {
        return joke1Reference;
    }

    public String getJoke2() {
        return joke2;
    }

    public String getJoke2Reference() {
        return joke2Reference;
    }

    public String getJoke3() {
        return joke3;
    }

    public String getJoke3Reference() {
        return joke3Reference;
    }

    public String getJoke4() {
        return joke4;
    }

    public String getJoke4Reference() {
        return joke4Reference;
    }

    public String getJoke5() {
        return joke5;
    }

    public String getJoke5Reference() {
        return joke5Reference;
    }
    
    
}
