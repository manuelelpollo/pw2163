<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Tutores_model extends CI_Model {

	function __construct(){
		parent::__construct();
		$this->load->database();
		$this->load->library('session');
	}

	function getTutores(){
		
		$resp = null;

		
		$this->db->select("nombre, appaterno, id");
		$this->db->from("tutores");
		
		$query = $this->db->get();

		$error = $this->db->error();

		if($query->num_rows()>0){
			$data = $query->result_array();

			for($i=0; $i<sizeof($data); $i++){
				$resp[$i]['id'] = $data[$i]['id'];
				$resp[$i]['name'] = $data[$i]['nombre']." ".$data[$i]['appaterno'];
			}
		}else{
			$resp['code'] = $error['code'];
			$resp['msj'] = "Sin Tutores Registrados";
		}

		return $resp;
	}

	function getAlumnos(){
		
		$resp = null;

		
		$this->db->select("nombre, appaterno, numcontrol");
		$this->db->from("alumnos");
		
		$query = $this->db->get();

		$error = $this->db->error();

		if($query->num_rows()>0){
			$data = $query->result_array();

			for($i=0; $i<sizeof($data); $i++){
				$resp[$i]['id'] = $data[$i]['numcontrol'];
				$resp[$i]['name'] = $data[$i]['nombre']." ".$data[$i]['appaterno'];
			}
		}else{
			$resp['code'] = $error['code'];
			$resp['msj'] = "Sin Tutores Registrados";
		}

		return $resp;
	}

	function addTutoria($data){
		
		$query = $this->db->insert('alu_tutores', $data);

		$resp = null;

		if($query){
			$resp['code'] = 0;
			$resp['msj'] = "Agregado Correctamente";
		}else{
			$resp['code'] = 1;
			$resp['msj'] = "Ocurrio un problema, comunicarse con su proveedor";
		}

		return $resp;
	}

	function getFinal(){
		
		$resp = null;
		
		$query = $this->db->query("select a.nombre as aname, a.appaterno as alast, a.carrera as arun, 
				t.nombre as namet, t.appaterno as tlast
				from alu_tutores at
				inner join alumnos a on a.numcontrol = at.alu_id
				inner join tutores t on t.id = at.tuto_id");

		$error = $this->db->error();

		if($query->num_rows()>0){
			$data = $query->result_array();

			for($i=0; $i<sizeof($data); $i++){
				$resp[$i]['namea'] = $data[$i]['aname']." ".$data[$i]['alast'];
				$resp[$i]['namet'] = $data[$i]['namet']." ".$data[$i]['tlast'];
				$resp[$i]['run'] = $data[$i]['arun'];
			}
		}else{
			$resp['code'] = $error['code'];
			$resp['msj'] = "Sin Tutores Registrados";
		}

		return $resp;
	}


}