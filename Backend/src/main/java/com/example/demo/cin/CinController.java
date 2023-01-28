package com.example.demo.cin;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/v/cin")
public class CinController {

    private final CinService cinService;

    @Autowired
    public CinController(CinService cinService){
        this.cinService=cinService;
    }

    @GetMapping
    public List<Cin> getCins(){
        return cinService.getCins();
    }

    @PostMapping
    public void registerCin(@RequestBody Cin cin){
        cinService.saveCin(cin);
    }

    @DeleteMapping(path="{cinId}")
    public void deleteCin(@PathVariable("cinId") Long cinId){
        cinService.deleteCin(cinId);
    }

    @PutMapping(path ="{userId}")
    public void updateCin(
            @PathVariable("cinId") Long cinId,
            @RequestParam(required=false) String lastName,
            @RequestParam(required=false) String cin){
        cinService.updateCin(cinId,lastName,cin);
    }


}
