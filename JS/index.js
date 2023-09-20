function PacienteRegistro(){    

    var Data = $('#data_paciente').val();/*Input type text*/
    var NomeHospitalPaciente = $('#nome_hospital_paciente').val();
    var NomePaciente = $('#nome_paciente').val();
    var IdadePaciente = $('#idade_paciente').val();
    var RgCpfPaciente = $('#rg_cpf_paciente').val();
    var FonePaciente = $('#fone_paciente').val();
    var AcompanhantePaciente = $('#acompanhante_paciente').val();
    var IdadeAcompanhantePaciente = $('#idade_acompanhante_paciente').val();
    var LocalOcorrenciaPaciente = $('#local_ocorrencia_paciente').val();
    var NUsbPaciente = $('#n_usab_paciente').val();
    var NOcorrPaciente = $('#n_ocorr_paciente').val();
    var DespPaciente = $('#desp_paciente').val();
    var HChPaciente = $('#h_ch_paciente').val();
    var KmFinalPaciente = $('#km_final_paciente').val();
    var CodSiaSusPaciente = $('#cod_sia_sus_paciente').val();

    var SexoPaciente = "";/*Input type radio*/
    if (document.getElementById("sexo_paciente_m").checked) {
        SexoPaciente = document.getElementById("sexo_paciente_m").value;
    } else if (document.getElementById("sexo_paciente_f").checked) {
        SexoPaciente = document.getElementById("sexo_paciente_f").value;
    }

    var CodUrCheckbox = document.getElementById("cod_ur");/*Input type Checkbox*/
    var CodUrChecked = CodUrCheckbox.checked;
    if (CodUrChecked) {
        var CodUr = 's';
    } else {
        var CodUr = 'n';
    }

    var CodPsCheckbox = document.getElementById("cod_ps");/*Input type Checkbox*/
    var CodPsChecked = CodPsCheckbox.checked;
    if (CodPsChecked) {
        var CodPs = 's';
    } else {
        var CodPs = 'n';
    }
    
     $.ajax({
        url: 'PHP/tabela-paciente.php',
        method: 'POST',
        data: {
            Data: Data,
            SexoPaciente: SexoPaciente,
            NomeHospitalPaciente: NomeHospitalPaciente,
            NomePaciente: NomePaciente,
            IdadePaciente: IdadePaciente,
            RgCpfPaciente: RgCpfPaciente,
            FonePaciente: FonePaciente,
            AcompanhantePaciente: AcompanhantePaciente,
            IdadeAcompanhantePaciente: IdadeAcompanhantePaciente,
            LocalOcorrenciaPaciente: LocalOcorrenciaPaciente,
            NUsbPaciente: NUsbPaciente,
            CodUr: CodUr,
            NOcorrPaciente: NOcorrPaciente,
            CodPs: CodPs,
            DespPaciente: DespPaciente,
            HChPaciente: HChPaciente,
            KmFinalPaciente: KmFinalPaciente,
            CodSiaSusPaciente: CodSiaSusPaciente
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
    
};
function SexoMasculino() {/*Input type radio*/
    var sexo_paciente_f = document.getElementById("sexo_paciente_f"); 
    sexo_paciente_f.checked = false;
} 
function SexoFeminino() {/*Input type radio*/
    var sexo_paciente_m = document.getElementById("sexo_paciente_m"); 
    sexo_paciente_m.checked = false;
}
function EmergenciaRegistro(){

};
function TermoDeRecusa(){

    var NomeTermoRecusa = $('#Nome_Recusa').val();
    var IdentidadeRecusa = $('#Identidade_Recusa').val();
    var CpfRescusa = $('#Cpf_Recusa').val();
    var AssinaturaRecusa = $('#Assinatura_Recusa').val();
    var TestemunhaRecusa = $('#Testemunha_Recusa').val();
    var DocRecusa = $('#Doc_Recusa').val();
    var TestemunhaRecusa2 = $('#Testemunha_Recusa_2').val();
    var DocRecusa2 = $('#Doc_Recusa_2').val();
    
    
    console.log(Data);

     $.ajax({
        url: 'PHP/Termo_de_recusa.php',
        method: 'POST',
        data: {
            NomeTermoRecusa: NomeTermoRecusa,
            IdentidadeRecusa: IdentidadeRecusa,
            CpfRescusa: CpfRescusa,
            AssinaturaRecusa: AssinaturaRecusa,
            TestemunhaRecusa: TestemunhaRecusa,
            DocRecusa: DocRecusa,
            TestemunhaRecusa2: TestemunhaRecusa2,
            DocRecusa2: DocRecusa2,
            
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
    
};
function FormaDeConducao(){

    var Conducao = "";/*Input type radio*/
    if (document.getElementById("deitada_conducao").checked) {
        Conducao = document.getElementById("deitada_conducao").value;
    } else if (document.getElementById("semi_deitada_conducao").checked) {
        Conducao = document.getElementById("semi_deitada_conducao").value;
    }
    else if (document.getElementById("sentada_conducao").checked) {
        Conducao = document.getElementById("sentada_conducao").value;/*Input type radio*/
    }

    if (document.getElementById("fc_ciclista").checked) {
        FcCiclista = document.getElementById("fc_ciclista").value;
    }else(FcCiclista = "")

    if (document.getElementById("fc_condutor_moto").checked) {
        FcCondutor = document.getElementById("fc_condutor_moto").value;
    }else(FcCondutor = "")

    if (document.getElementById("fc_gestante").checked) {
        FcGestante = document.getElementById("fc_gestante").value;
    }else(FcGestante = "")

    if (document.getElementById("fc_pass_ban_frente").checked) {
        FcPassBanFrente = document.getElementById("fc_pass_ban_frente").value;
    }else(FcPassBanFrente = "")

    if (document.getElementById("fc_pass_moto").checked) {
        FcPassMoto = document.getElementById("fc_pass_moto").value;
    }else(FcPassMoto = "")

    if (document.getElementById("fc_condutor_carro").checked) {
        FcCondutorCarro = document.getElementById("fc_condutor_carro").value;
    }else(FcCondutorCarro = "")

    if (document.getElementById("fc_clinico").checked) {
        FcClinico = document.getElementById("fc_clinico").value;
    }else(FcClinico = "")

    if (document.getElementById("fc_trauma").checked) {
        FcTrauma = document.getElementById("fc_trauma").value;
    }else( FcTrauma = "")

    if (document.getElementById("fc_pass_ban_tras").checked) {
        FcPassBanTras = document.getElementById("fc_pass_ban_tras").value;
    }else(FcPassBanTras = "")

    if (document.getElementById("fc_pedestre").checked) {
        FcPedestre = document.getElementById("fc_pedestre").value;
    }else(FcPedestre = "")

    var FormaConducao = FcCiclista + " " + FcCondutor + " " + FcGestante + " " + FcPassBanFrente + " " + FcPassMoto + " " + FcCondutorCarro + " " + FcClinico + " " + FcTrauma + " " + FcPassBanTras + " " + FcPedestre;
    console.log(FormaConducao);

    $.ajax({
        url: 'PHP/forma_de_conducao.php',
        method: 'POST',
        data: {
           Conducao: Conducao,
           FormaConducao: FormaConducao
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
}

function Deitada() {/*Input type radio*/
    var semi_deitada_conducao = document.getElementById("semi_deitada_conducao"); 
    semi_deitada_conducao.checked = false;

    var sentada_conducao = document.getElementById("sentada_conducao"); 
    sentada_conducao.checked = false;
} 
function Semi_Deitada() {/*Input type radio*/
    var deitada_conducao = document.getElementById("deitada_conducao"); 
    deitada_conducao.checked = false;

    var sentada_conduo = document.getElementById("sentada_conducao"); 
    sentada_conduo.checked = false;
} 
function Sentada() {/*Input type radio*/
    var deitada_conducao = document.getElementById("deitada_conducao"); 
    deitada_conducao.checked = false;

    var semi_deitada_conducao = document.getElementById("semi_deitada_conducao"); 
    semi_deitada_conducao.checked = false;
}
function AvaliacaoPaciente(){

}
function Espontanea() {/*Input type radio*/
    var EspontaneaPaciente = document.getElementById("sexo_paciente_f"); 
    EspontaneaPaciente.checked = false;}