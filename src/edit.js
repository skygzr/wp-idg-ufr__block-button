import { useBlockProps } from '@wordpress/block-editor';
import {
	UFRBlockHeader,
	UFRInput,
	UFRSelect,
	UFRIconPicker,
} from 'wp-idg-ufr__block-components';
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function edit( { attributes, setAttributes, isSelected } ) {
	const { type, style, size, text, icon } = attributes;
	const iconClassName = `${ icon } ${ text.length !== 0 ? 'mr-1' : '' }`;
	const btnClassName = `br-button ${ type } ${ style } ${ size }`;
	const typeOptions = [
		{
			label: 'Padrão',
			value: '',
		},
		{
			label: 'Circular',
			value: 'circle',
		},
		{
			label: 'Bloco (Ocupa todo o espaço horizontal disponível)',
			value: 'block',
		},
	];
	const styleOptions = [
		{
			label: 'Cores Principais',
			value: 'primary',
		},
		{
			label: 'Cores Secundárias',
			value: 'secondary',
		},
		{
			label: 'Fundo Transparente',
			value: '',
		},
	];
	const sizeOptions = [
		{
			label: 'Médio',
			value: '',
		},
		{
			label: 'Pequeno',
			value: 'small',
		},
		{
			label: 'Grande',
			value: 'large',
		},
	];

	return isSelected ? (
		<div
			{ ...useBlockProps( {
				className: 'edit block-responsive ufr-block-component',
			} ) }
		>
			<div className="row align-items-center">
				<div className="col config">
					<UFRBlockHeader
						title="Botão"
						subtitle="Configure a aparenência do botão abaixo."
					/>

					<UFRSelect
						label="Escolha o Tipo do Botão"
						options={ typeOptions }
						value={ type }
						attr="type"
						setter={ setAttributes }
					/>

					<UFRSelect
						label="Escolha o Estilo do Botão"
						options={ styleOptions }
						value={ style }
						attr="style"
						setter={ setAttributes }
					/>

					<UFRSelect
						label="Escolha o Tamanho do Botão"
						options={ sizeOptions }
						value={ size }
						attr="size"
						setter={ setAttributes }
					/>

					<UFRInput
						label="Texto do Botão"
						value={ text }
						attr="text"
						setter={ setAttributes }
					/>

					<UFRIconPicker setter={ setAttributes } />
				</div>

				<div className="row preview">
					<button className={ btnClassName } type="button">
						<i className={ iconClassName } />
						{ text }
					</button>
				</div>
			</div>
		</div>
	) : (
		<div
			{ ...useBlockProps( {
				className: 'show block-responsive ufr-block-component',
			} ) }
		>
			<div className="row align-items-center">
				<div className="col-12">
					<button className={ btnClassName } type="button">
						<i className={ iconClassName } />
						{ text }
					</button>
				</div>
			</div>
		</div>
	);
}
