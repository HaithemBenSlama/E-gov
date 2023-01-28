package com.example.demo.pdf;

import com.example.demo.cin.Cin;
import com.example.demo.cin.CinRepository;
import com.example.demo.contratmariage.ContratMariage;
import com.example.demo.contratmariage.ContratMariageRepository;
import com.example.demo.declarationnaissance.DeclarationNaissance;
import com.example.demo.declarationnaissance.NaissanceRepository;
import com.example.demo.diplome.Diplome;
import com.example.demo.diplome.DiplomeRepository;
import com.example.demo.user.UserRepository;
import com.example.demo.user.Userego;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.IBlockElement;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.kernel.pdf.PdfWriter;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Optional;
@AllArgsConstructor
@Service
public class PdfExporterService {

    UserRepository userRepository;
    CinRepository cinRepository;
    DiplomeRepository diplomeRepository;
    NaissanceRepository naissanceRepository;

    ContratMariageRepository mariageRepository;


    public void createPdfPermis(Long id) {
        Userego user1 = userRepository.findUseregobyId(id).orElseThrow(() -> new IllegalStateException(("User does not exist")));
        String n = user1.getFirstName();
        String filePdf = "C:/Users/haith/Desktop/" + n + "PermisPdf.pdf";
        try {

            PdfWriter writer = new PdfWriter(filePdf);
            PdfDocument pdfDoc = new PdfDocument(writer);
            Document document = new Document(pdfDoc);
            Paragraph p1 = new Paragraph("E-GOV ");
            Paragraph p2 = new Paragraph("FROM THE TUNISIAN PEOPLE ");
            Paragraph p3 = new Paragraph("Title : Official Statement from Tunisia Government at the 6th African Ministerial");
            Paragraph p4 = new Paragraph("Conference on Official Documents");
            Paragraph p5 = new Paragraph("Organization: Tunisia Agency E-GOV for national documents (EGOV)");
            Paragraph p6 = new Paragraph("Session: High Level Forum");
            Paragraph p7 = new Paragraph("");
            Paragraph p8 = new Paragraph("");
            Paragraph p9 = new Paragraph("----------------------------------------------------------------------");
            Paragraph p10 = new Paragraph("                  6th African Ministerial ");
            Paragraph p11 = new Paragraph("                         TUNISIA ");
            Paragraph p12 = new Paragraph("                    High Level Statement ");
            Paragraph p13 = new Paragraph("               Permis Coordinates");
            Paragraph p14 = new Paragraph("");
            Paragraph p15 = new Paragraph("");
            Paragraph p16 = new Paragraph("First Name          :   " + user1.getFirstName());
            Paragraph p17 = new Paragraph("Last Name           :   " + user1.getLastName());
            Paragraph p18 = new Paragraph("CIN                      :   " + user1.getCin());
            Paragraph p19 = new Paragraph("Date Naissance      :   " + user1.getDateNaissance());
            Paragraph p20 = new Paragraph("Passport number     :   " + user1.getPermis().getNumero());
            Paragraph p21 = new Paragraph("");
            Paragraph p22 = new Paragraph("");
            Paragraph p23 = new Paragraph("-------------------------------------------------------------------");
            Paragraph p24 = new Paragraph("Organization: Tunisia Agency E-GOV for national documents (EGOV)");
            document.add(p1);
            document.add(p2);
            document.add(p3);
            document.add(p4);
            document.add(p5);
            document.add(p6);
            document.add(p7);
            document.add(p8);
            document.add(p9);
            document.add(p10);
            document.add(p11);
            document.add(p12);
            document.add(p13);
            document.add(p14);
            document.add(p15);
            document.add(p16);
            document.add(p17);
            document.add(p18);
            document.add(p19);
            document.add(p20);
            document.add(p21);
            document.add(p22);
            document.add(p23);
            document.add(p24);
            document.close();
            pdfDoc.close();
            writer.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
    public void createPdfCin(Long id) {
        Userego user1 = userRepository.findUseregobyId(id).orElseThrow(() -> new IllegalStateException(("User does not exist")));
        Cin cin1=cinRepository.findCinByCin(user1.getCin()).orElseThrow(()->new IllegalStateException(("CIN does not exist")));
        String n = user1.getFirstName();
        String filePdf = "C:/Users/haith/Desktop/" + n + "CinPdf.pdf";
        try {

                    PdfWriter writer = new PdfWriter(filePdf);
                    PdfDocument pdfDoc = new PdfDocument(writer);
                    Document document = new Document(pdfDoc);
                    Paragraph p1 = new Paragraph("E-GOV ");
                    Paragraph p2 = new Paragraph("FROM THE TUNISIAN PEOPLE ");
                    Paragraph p3 = new Paragraph("Title : Official Statement from Tunisia Government at the 6th African Ministerial");
                    Paragraph p4 = new Paragraph("Conference on Official Documents");
                    Paragraph p5 = new Paragraph("Organization: Tunisia Agency E-GOV for national documents (EGOV)");
                    Paragraph p6 = new Paragraph("Session: High Level Forum");
                    Paragraph p7 = new Paragraph("");
                    Paragraph p8 = new Paragraph("");
                    Paragraph p9 = new Paragraph("----------------------------------------------------------------------");
                    Paragraph p10 = new Paragraph("                  6th African Ministerial ");
                    Paragraph p11 = new Paragraph("                         TUNISIA ");
                    Paragraph p12 = new Paragraph("                    High Level Statement ");
                    Paragraph p13 = new Paragraph("               CIN Coordinates");
                    Paragraph p14 = new Paragraph("");
                    Paragraph p15 = new Paragraph("");
                    Paragraph p16 = new Paragraph("First Name          :   "+user1.getFirstName());
                    Paragraph p17 = new Paragraph("Last Name           :   "+user1.getLastName());
                    Paragraph p18 = new Paragraph("CIN                 :   "+user1.getCin());
                    Paragraph p19 = new Paragraph("Date Naissance      :   "+user1.getDateNaissance());
                    Paragraph p20 = new Paragraph("Father's Name       :   "+cin1.getFatherName());
                    Paragraph p21 = new Paragraph("Mother's Name       :   "+cin1.getMotherName());
                    Paragraph p22 = new Paragraph("Town                :   "+cin1.getLieu());
                    Paragraph p23 = new Paragraph("Profession          :   "+cin1.getProfession());
                    Paragraph p24 = new Paragraph("");
                    Paragraph p25 = new Paragraph("");
                    Paragraph p26 = new Paragraph("----------------------------------------------------------------------------------------");
                    Paragraph p27 = new Paragraph("Organization: Tunisia Agency E-GOV for national documents (EGOV)");
                    document.add(p1);
                    document.add(p2);
                    document.add(p3);
                    document.add(p4);
                    document.add(p5);
                    document.add(p6);
                    document.add(p7);
                    document.add(p8);
                    document.add(p9);
                    document.add(p10);
                    document.add(p11);
                    document.add(p12);
                    document.add(p13);
                    document.add(p14);
                    document.add(p15);
                    document.add(p16);
                    document.add(p17);
                    document.add(p18);
                    document.add(p19);
                    document.add(p20);
                    document.add(p21);
                    document.add(p22);
                    document.add(p23);
                    document.add(p24);
                    document.add(p25);
                    document.add(p26);
                    document.add(p27);
                    document.close();
                    pdfDoc.close();
                    writer.close();
            } catch (FileNotFoundException e) {
            e.printStackTrace();
                        } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }
    public void createPdfDiplome(Long id) {
        Userego user1 = userRepository.findUseregobyId(id).orElseThrow(() -> new IllegalStateException(("User does not exist")));
        Diplome diplome1=diplomeRepository.findDiplomeByCin(user1.getCin()).orElseThrow(()->new IllegalStateException(("Diplome does not exist")));
        String n = user1.getFirstName();
        String filePdf = "C:/Users/haith/Desktop/" + n + "DiplomePdf.pdf";
        try {

                    PdfWriter writer = new PdfWriter(filePdf);
                    PdfDocument pdfDoc = new PdfDocument(writer);
                    Document document = new Document(pdfDoc);
                    Paragraph p1 = new Paragraph("E-GOV ");
                    Paragraph p2 = new Paragraph("FROM THE TUNISIAN PEOPLE ");
                    Paragraph p3 = new Paragraph("Title : Official Statement from Tunisia Government at the 6th African Ministerial");
                    Paragraph p4 = new Paragraph("Conference on Official Documents");
                    Paragraph p5 = new Paragraph("Organization: Tunisia Agency E-GOV for national documents (EGOV)");
                    Paragraph p6 = new Paragraph("Session: High Level Forum");
                    Paragraph p7 = new Paragraph("");
                    Paragraph p8 = new Paragraph("");
                    Paragraph p9 = new Paragraph("----------------------------------------------------------------------");
                    Paragraph p10 = new Paragraph("                  6th African Ministerial ");
                    Paragraph p11 = new Paragraph("                         TUNISIA ");
                    Paragraph p12 = new Paragraph("                    High Level Statement ");
                    Paragraph p13 = new Paragraph("               DIPLOMA Coordinates");
                    Paragraph p14 = new Paragraph("");
                    Paragraph p15 = new Paragraph("");
                    Paragraph p16 = new Paragraph("First Name          :   "+user1.getFirstName());
                    Paragraph p17 = new Paragraph("Last Name           :   "+user1.getLastName());
                    Paragraph p18 = new Paragraph("CIN                 :   "+user1.getCin());
                    Paragraph p19 = new Paragraph("Date Naissance      :   "+user1.getDateNaissance());
                    Paragraph p20 = new Paragraph("Titre               :   "+diplome1.getTitre());
                    Paragraph p21 = new Paragraph("Mention             :   "+diplome1.getMention());
                    Paragraph p24 = new Paragraph("");
                    Paragraph p25 = new Paragraph("");
                    Paragraph p26 = new Paragraph("----------------------------------------------------------------------------------------");
                    Paragraph p27 = new Paragraph("Organization: Tunisia Agency E-GOV for national documents (EGOV)");
                    document.add(p1);
                    document.add(p2);
                    document.add(p3);
                    document.add(p4);
                    document.add(p5);
                    document.add(p6);
                    document.add(p7);
                    document.add(p8);
                    document.add(p9);
                    document.add(p10);
                    document.add(p11);
                    document.add(p12);
                    document.add(p13);
                    document.add(p14);
                    document.add(p15);
                    document.add(p16);
                    document.add(p17);
                    document.add(p18);
                    document.add(p19);
                    document.add(p20);
                    document.add(p21);
                    document.add(p24);
                    document.add(p25);
                    document.add(p26);
                    document.add(p27);
                    document.close();
                    pdfDoc.close();
                    writer.close();
                } catch (FileNotFoundException e) {
                    e.printStackTrace();
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }
    public void createPdfNaissance(Long id) {
        Userego user1 = userRepository.findUseregobyId(id).orElseThrow(() -> new IllegalStateException(("User does not exist")));
        DeclarationNaissance declare1=naissanceRepository.findDeclarationNaissanceByCinH(user1.getCin()).orElseThrow(()->new IllegalStateException(("Diplome does not exist")));
        String n = user1.getFirstName();
        String filePdf = "C:/Users/haith/Desktop/" + n + "BirthPdf.pdf";
                try {
                    PdfWriter writer = new PdfWriter(filePdf);
                    PdfDocument pdfDoc = new PdfDocument(writer);
                    Document document = new Document(pdfDoc);
                    Paragraph p1 = new Paragraph("E-GOV ");
                    Paragraph p2 = new Paragraph("FROM THE TUNISIAN PEOPLE ");
                    Paragraph p3 = new Paragraph("Title : Official Statement from Tunisia Government at the 6th African Ministerial");
                    Paragraph p4 = new Paragraph("Conference on Official Documents");
                    Paragraph p5 = new Paragraph("Organization: Tunisia Agency E-GOV for national documents (EGOV)");
                    Paragraph p6 = new Paragraph("Session: High Level Forum");
                    Paragraph p7 = new Paragraph("");
                    Paragraph p8 = new Paragraph("");
                    Paragraph p9 = new Paragraph("------------------------------------------------------------------------------------------");
                    Paragraph p10 = new Paragraph("                  6th African Ministerial ");
                    Paragraph p11 = new Paragraph("                         TUNISIA ");
                    Paragraph p12 = new Paragraph("                    High Level Statement ");
                    Paragraph p13 = new Paragraph("              Birth Declaration Coordinates");
                    Paragraph p14 = new Paragraph("");
                    Paragraph p15 = new Paragraph("");
                    Paragraph p16 = new Paragraph("First Name              :   "+user1.getFirstName());
                    Paragraph p17 = new Paragraph("Last Name               :   "+user1.getLastName());
                    Paragraph p18 = new Paragraph("CIN                     :   "+user1.getLastName());
                    Paragraph p19 = new Paragraph("Date Naissance          :   "+user1.getDateNaissance());
                    Paragraph p20 = new Paragraph("Father's FirstName      :   "+declare1.getFirstNameH());
                    Paragraph p21 = new Paragraph("Fathers's LastName      :   "+declare1.getLastNameH());
                    Paragraph p22 = new Paragraph("Mother's FirstName      :   "+declare1.getFirstNameF());
                    Paragraph p23 = new Paragraph("Mother's LastName       :   "+declare1.getLastNameH());
                    Paragraph p24 = new Paragraph("Birth Town              :   "+declare1.getLastNameH());
                    Paragraph p25 = new Paragraph("");
                    Paragraph p26 = new Paragraph("");
                    Paragraph p27 = new Paragraph("----------------------------------------------------------------------------------------");
                    Paragraph p28 = new Paragraph("Organization: Tunisia Agency E-GOV for national documents (EGOV)");
                    document.add(p1);
                    document.add(p2);
                    document.add(p3);
                    document.add(p4);
                    document.add(p5);
                    document.add(p6);
                    document.add(p7);
                    document.add(p8);
                    document.add(p9);
                    document.add(p10);
                    document.add(p11);
                    document.add(p12);
                    document.add(p13);
                    document.add(p14);
                    document.add(p15);
                    document.add(p16);
                    document.add(p17);
                    document.add(p18);
                    document.add(p19);
                    document.add(p20);
                    document.add(p21);
                    document.add(p22);
                    document.add(p23);
                    document.add(p24);
                    document.add(p25);
                    document.add(p26);
                    document.add(p27);
                    document.add(p28);
                    document.close();
                    pdfDoc.close();
                    writer.close();

                } catch (FileNotFoundException e) {
                    e.printStackTrace();
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }

    public void createPdfMariage(Long id) {
                Userego user1 = userRepository.findUseregobyId(id).orElseThrow(() -> new IllegalStateException(("User does not exist")));
                ContratMariage contrat=mariageRepository.findContratMariageByCinH(user1.getCin()).orElseThrow(()->new IllegalStateException(("Diplome does not exist")));
                String n = user1.getFirstName();
                String filePdf = "C:/Users/haith/Desktop/" + n + "MariagePdf.pdf";
                try {
                    PdfWriter writer = new PdfWriter(filePdf);
                    PdfDocument pdfDoc = new PdfDocument(writer);
                    Document document = new Document(pdfDoc);
                    Paragraph p1 = new Paragraph("E-GOV ");
                    Paragraph p2 = new Paragraph("FROM THE TUNISIAN PEOPLE ");
                    Paragraph p3 = new Paragraph("Title : Official Statement from Tunisia Government at the 6th African Ministerial");
                    Paragraph p4 = new Paragraph("Conference on Official Documents");
                    Paragraph p5 = new Paragraph("Organization: Tunisia Agency E-GOV for national documents (EGOV)");
                    Paragraph p6 = new Paragraph("Session: High Level Forum");
                    Paragraph p7 = new Paragraph("");
                    Paragraph p8 = new Paragraph("");
                    Paragraph p9 = new Paragraph("------------------------------------------------------------------------------------------");
                    Paragraph p10 = new Paragraph("                  6th African Ministerial ");
                    Paragraph p11 = new Paragraph("                         TUNISIA ");
                    Paragraph p12 = new Paragraph("                    High Level Statement ");
                    Paragraph p13 = new Paragraph("              Mariage Declaration Coordinates");
                    Paragraph p14 = new Paragraph("");
                    Paragraph p15 = new Paragraph("");
                    Paragraph p16 = new Paragraph("Husband FirstName              :   "+contrat.getFirstNameH());
                    Paragraph p17 = new Paragraph("Husband LastName               :   "+contrat.getLastNameH());
                    Paragraph p18 = new Paragraph("Wife FirstName              :   "+contrat.getFirstNameF());
                    Paragraph p19 = new Paragraph("Wife LastName               :   "+contrat.getLastNameF());
                    Paragraph p20 = new Paragraph("CIN Husband                    :   "+contrat.getCinH());
                    Paragraph p21 = new Paragraph("CIN Wife                    :   "+contrat.getCinF());
                    Paragraph p22 = new Paragraph("Mariage Date          :   "+contrat.getDateMariage());
                    Paragraph p23 = new Paragraph("Mariage Town              :   "+contrat.getLieu());
                    Paragraph p24 = new Paragraph("");
                    Paragraph p25 = new Paragraph("");
                    Paragraph p26 = new Paragraph("----------------------------------------------------------------------------------------");
                    Paragraph p27 = new Paragraph("Organization: Tunisia Agency E-GOV for national documents (EGOV)");
                    document.add(p1);
                    document.add(p2);
                    document.add(p3);
                    document.add(p4);
                    document.add(p5);
                    document.add(p6);
                    document.add(p7);
                    document.add(p8);
                    document.add(p9);
                    document.add(p10);
                    document.add(p11);
                    document.add(p12);
                    document.add(p13);
                    document.add(p14);
                    document.add(p15);
                    document.add(p16);
                    document.add(p17);
                    document.add(p18);
                    document.add(p19);
                    document.add(p20);
                    document.add(p21);
                    document.add(p22);
                    document.add(p23);
                    document.add(p24);
                    document.add(p25);
                    document.add(p26);
                    document.add(p27);
                    document.close();
                    pdfDoc.close();
                    writer.close();
                } catch (FileNotFoundException e) {
                    e.printStackTrace();
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }

    }

