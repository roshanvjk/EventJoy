.siq_content { font-size:13px !important; }
.siq-message {font-size:13px !important; width:100% !important;}
.siq-agntmsg { font-size:13px !important;}
.siq-visitmsg {  font-size:13px !important; }
.siq-dropdown {font-size:13px !important;  }
.siq-dropdown {font-size:13px !important;  }
.msgbx {font-size:13px !important;  }
.cmpnt-body-cont{font-size:13px !important;}
.cmpnt-optn-list{font-size:13px !important;}
.siq-user-message{width:100% !important;}

.sqico-reply:before {
    content: "\e97c";
    font-family: siq!important;
}

.sqico-larrow::before {
    content: "\e924";
	font-family: siq!important;
    display: inline-block;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    transform: rotate(90deg);
}

.sqico-larrow::before {
    content: "\e924";
    font-family: siq!important;
    display: inline-block;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    transform: rotate(90deg);
}

.sqico-end::before {
    content: "\e906";
    font-family: siq!important;
}

.sqico-mute::before {
    content: "\e90b";
	font-family: siq!important;
}

.sqico-attach::before {
    content: "\e90e";
    font-family: siq!important;
}

@media only screen and (max-width: 600px) {
  .loadframe [class*=" sqico-"]::after, .loadframe [class*=" sqico-"]::before, .loadframe [class^=sqico-]::after, .loadframe [class^=sqico-]::before {
    font-family: siq!important;
}
}
