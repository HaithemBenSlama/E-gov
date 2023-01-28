package com.example.demo.pdf;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("api/v/createpdf")
@Controller
public class PdfExporterController {

    private PdfExporterService pdfExporterService;

    @Autowired
    public PdfExporterController(PdfExporterService pdfExporterService) {
        this.pdfExporterService = pdfExporterService;
    }

    @GetMapping(path="cin/{userId}")
    public String pdfFile(
            @PathVariable("userId") Long userId)

    {
        pdfExporterService.createPdfCin(userId);
        return "You pdf Document is on your Desktop";
    }
    @GetMapping(path="permis/{userId}")
    public String pdfFile2(
            @PathVariable("userId") Long userId)

    {
        pdfExporterService.createPdfPermis(userId);
        return "You pdf Document is on your Desktop";
    }
    @GetMapping(path="diplome/{userId}")
    public String pdfFile3(
            @PathVariable("userId") Long userId)

    {
        pdfExporterService.createPdfDiplome(userId);
        return "You pdf Document is on your Desktop";
    }
    @GetMapping(path="naissance/{userId}")
    public String pdfFile4(
            @PathVariable("userId") Long userId)

    {
        pdfExporterService.createPdfNaissance(userId);
        return "You pdf Document is on your Desktop";
    }
    @GetMapping(path="mariage/{userId}")
    public String pdfFile5(
            @PathVariable("userId") Long userId)

    {
        pdfExporterService.createPdfMariage(userId);
        return "You pdf Document is on your Desktop";
    }

}
